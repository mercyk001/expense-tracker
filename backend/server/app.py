from flask import Flask, jsonify, request
from flask_migrate import Migrate

from models import db, User, Expense

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///expensetracker.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)


#serializers
def user_to_dict(user:User):
    return {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        
    }
    
    
def expense_to_dict(expense:Expense):
    return {
        'id': expense.id,
        'user_id': expense.user_id,
        'category': expense.category,
        'amount': expense.amount,
        'description': expense.description,
        'date': expense.date.isoformat()  # Convert date to ISO format for JSON serialization
    }    



@app.route('/')
def index():
    return "Welcome to the Expense Tracker API!"



@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user_to_dict(user) for user in users]), 200

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(user_to_dict(user)), 200

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(username=data['username'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(user_to_dict(new_user)), 201

@app.route('/users/<int:user_id>', methods=['PATCH'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    
    if 'username' in data:
        user.username = data['username']
    if 'email' in data:
        user.email = data['email']
    if 'password' in data:
        user.password = data['password']
    db.session.commit()
    return jsonify(user_to_dict(user)), 200
         
         
        
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'}), 204
        


@app.route('/expenses', methods=['GET'])
def get_expenses():
    expenses = Expense.query.all()
    return jsonify([expense_to_dict(expense) for expense in expenses]), 200


@app.route('/expenses', methods=['POST'])
def create_expense():
    data = request.get_json()
    new_expense = Expense(
        user_id=data['user_id'],
        category=data['category'],
        amount=data['amount'],
        description=data.get('description'),
        date=data['date']
    )
    db.session.add(new_expense)
    db.session.commit()
    return jsonify(expense_to_dict(new_expense)), 201


@app.route('/expenses/<int:expense_id>', methods=['PATCH'])
def update_expense(expense_id):
    expense = Expense.query.get_or_404(expense_id)
    data = request.get_json()
    
    if 'category' in data:
        expense.category = data['category']
    if 'amount' in data:
        expense.amount = data['amount']
    if 'description' in data:
        expense.description = data['description']
    if 'date' in data:
        expense.date = data['date']
    
    db.session.commit()
    return jsonify(expense_to_dict(expense)), 200



@app.route('/expenses/<int:expense_id>', methods=['DELETE'])
def delete_expense(expense_id):
    expense = Expense.query.get_or_404(expense_id)
    db.session.delete(expense)
    db.session.commit()
    return jsonify({'message': 'Expense deleted successfully'}), 204
   





if __name__ == '__main__':
    app.run(port=5555, debug=True)