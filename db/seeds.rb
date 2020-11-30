# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@user = User.create!(
  username: 'dean', 
  email: 'dean@gmail.com', 
  image_url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/17/09/peter-fonda-easy-rider.jpg?width=990', 
  password: '123456')

puts "#{User.count} users created"

@motorcycle = Motorcycle.create!(
  name: 'Captian America', 
  img_url: 'https://ca-times.brightspotcdn.com/dims4/default/3d51842/2147483647/strip/true/crop/2048x1559+0+0/resize/840x639!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6d%2Fae%2F9c3e66ea01994a7a64a95622a497%2Fla-fi-hy-easy-rider-motorcycle-headed-to-aucti-001', 
  user: @user)

puts "#{Motorcycle.count} motorcycles created"

@maintenance_note = MaintenanceNote.create!(
  content: 'Needs more chrome',
  motorcycle: @motorcycle)

puts "#{MaintenanceNote.count} notes created"