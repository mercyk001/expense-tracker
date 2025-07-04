from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

metadata = MetaData()
db = SQLAlchemy(metadata=metadata)


class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column("password_hash", db.String, nullable=False)
    
    
    expenses = db.relationship('Expense', back_populates='user', cascade='all, delete-orphan')
    
    
    @validates('username', 'email')
    def validate_not_empty(self, key, value):
        if not value:
            raise ValueError(f"{key} cannot be empty")
        return value
    
    @property
    def password(self):
        raise AttributeError("Password is  write only")
    
    
    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)    
    
    def __repr__(self):
        return f"<User {self.username}>"
    
    
class Expense(db.Model):
    __tablename__ = 'expenses'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category = db.Column(db.String, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    description = db.Column(db.String, nullable=True)
    date = db.Column(db.DateTime, default= datetime.utcnow, nullable=False)
    
    user = db.relationship('User', back_populates='expenses')
    
    @validates('amount')
    def validate_positive_amount(self, key, value):
        if value <= 0:
            raise ValueError("Amount must be positive")
        return value
    
    def __repr__(self):
        return f"<Expense {self.category} - {self.amount} on {self.date}>"  