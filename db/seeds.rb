# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@user = User.create!(username: 'dean', email: 'dean@gmail.com', image_url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/17/09/peter-fonda-easy-rider.jpg?width=990', password_digest: '123456')

puts "#{User.count} users created"