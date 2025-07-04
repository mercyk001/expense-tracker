from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates

metadata = MetaData()
db = SQLAlchemy(metadata=metadata)
