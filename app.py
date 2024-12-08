from flask import Flask, request
from dotenv import load_dotenv
import os
import smtplib, ssl

# Load environment variables
load_dotenv('vars.env')
print("DEBUG:", os.environ.get("EMAIL_USER"), os.environ.get("EMAIL_PASSWORD"), os.environ.get("RECEIVER_EMAIL"))


app = Flask(__name__, static_folder='src', static_url_path='')

@app.route('/')
def serve_index():
    return app.send_static_file('index.html')

@app.route('/send', methods=['POST'])
def send_email():
    name = request.form.get('name')
    sender_email = request.form.get('email')
    message = request.form.get('message')

    if not name or not sender_email or not message:
        return "Please fill all fields.", 400

    # Email sending logic
    receiver_email = os.getenv('RECEIVER_EMAIL')
    smtp_server = "smtp.gmail.com"
    port = 587
    
    # Get credentials from the environment
    login_email = os.environ.get('EMAIL_USER')
    login_password = os.environ.get('EMAIL_PASSWORD')
    
    subject = f"Message from {name}"
    body = f"Name: {name}\nEmail: {sender_email}\nMessage: {message}"
    
    email_message = f"Subject: {subject}\n\n{body}"   
    
    context = ssl.create_default_context()
    
    # Using smtplib
    try:
        with smtplib.SMTP(smtp_server, port) as server:
            server.starttls(context=context)
            server.login(login_email, login_password)
            server.sendmail(login_email, receiver_email, email_message)
        return "Email sent successfully!", 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
