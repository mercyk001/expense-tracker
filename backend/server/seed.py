# seed.py
"""
Populate the database with demo users and expenses.
Run:  python seed.py
"""
from random import choice, uniform
from decimal import Decimal

from faker import Faker
from app import app
from models import db, User, Expense 

fake = Faker()
CATEGORIES = ["Food", "Transport", "Utilities", "Entertainment", "Other"]



with app.app_context():
    # reset DB
    db.drop_all()
    db.create_all()

    # --- users ---
    users = []
    for i in range(3):
        u = User(username=f"user{i+1}", email=f"user{i+1}@example.com")
        u.password = "password"
        users.append(u)
        db.session.add(u)
    db.session.commit()

    # --- expenses ---
    for user in users:
        for _ in range(8):
            exp = Expense(
                user_id=user.id,
                description=fake.sentence(nb_words=3),
                category=choice(CATEGORIES),
                amount=Decimal(f"{uniform(5, 100):.2f}"),
            )
            db.session.add(exp)
    db.session.commit()

    print("Seeded database with", len(users), "users and", Expense.query.count(), "expenses.")
