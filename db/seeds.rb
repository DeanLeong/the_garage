# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@user1 = User.create!(
  username: 'Dean', 
  email: 'dean@gmail.com', 
  img_url: 'https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/118026499_133504188187187_3141351955455876139_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=SO15iwEzsgwAX_uAEAu&_nc_ht=scontent-bos3-1.xx&oh=ce04dfc932a4634806cb9e5e95559756&oe=5FEFEBF9', 
  password: '123456')

@user2 = User.create!(
  username: 'Tom', 
  email: 'tom@gmail.com', 
  img_url: 'https://i.insider.com/5b7ecccfb354cdbe318b554f?width=994&format=jpeg', 
  password: '123456')

puts "#{User.count} users created"

@motorcycle1 = Motorcycle.create!(
  name: 'Chopper', 
  img_url: 'https://ca-times.brightspotcdn.com/dims4/default/3d51842/2147483647/strip/true/crop/2048x1559+0+0/resize/840x639!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6d%2Fae%2F9c3e66ea01994a7a64a95622a497%2Fla-fi-hy-easy-rider-motorcycle-headed-to-aucti-001', 
  user: @user1)

@motorcycle2 = Motorcycle.create!(
  name: 'Suzuki Hayabusa', 
  img_url: 'https://cdp.azureedge.net/products/USA/SU/2020/MC/SUPERSPORT/HAYABUSA/50/CANDY_DARING_RED/2000000003.jpg', 
  user: @user1)

@motorcycle2 = Motorcycle.create!(
  name: 'Ninja GPz900', 
  img_url: 'https://www.motorcyclespecs.co.za/Gallery/Kawasaki%20GPZ900R%2089.jpg', 
  user: @user2)

@motorcycle4 = Motorcycle.create!(
  name: 'Ninja H2', 
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kawasaki_Ninja_H2.jpg/300px-Kawasaki_Ninja_H2.jpg', 
  user: @user2)

puts "#{Motorcycle.count} motorcycles created"

@maintenance_note1 = MaintenanceNote.create!(
  content: 'Needs more chrome.',
  motorcycle: @motorcycle1)

@maintenance_note2 = MaintenanceNote.create!(
  content: "Can't improve on perfection.",
  motorcycle: @motorcycle2)

@maintenance_note3 = MaintenanceNote.create!(
  content: "test 1",
  motorcycle: @motorcycle1)

@maintenance_note4 = MaintenanceNote.create!(
  content: "test 2",
  motorcycle: @motorcycle1)

@maintenance_note5 = MaintenanceNote.create!(
  content: "test 3.",
  motorcycle: @motorcycle2)

@maintenance_note5 = MaintenanceNote.create!(
  content: "test 4.",
  motorcycle: @motorcycle2)

puts "#{MaintenanceNote.count} notes created"