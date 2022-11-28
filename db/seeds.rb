# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(username: 'Sarah', password_digest: 'password')
user2 = User.create(username: 'Oscar', password_digest: 'password')
user3 = User.create(username: 'Abby', password_digest: 'password')

