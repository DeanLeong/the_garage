# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@user1 = User.create!(
  username: 'dean', 
  email: 'dean@gmail.com', 
  img_url: 'https://media-exp1.licdn.com/dms/image/C4D35AQEr06kiLnDAsw/profile-framedphoto-shrink_200_200/0?e=1607115600&v=beta&t=JgZ4DMmCyU_CuEa7N-EDOFX5iWF22m88e5FHM2w0ze0', 
  password: '123456')

puts "#{User.count} users created"

@motorcycle1 = Motorcycle.create!(
  name: 'Captain America', 
  img_url: 'https://ca-times.brightspotcdn.com/dims4/default/3d51842/2147483647/strip/true/crop/2048x1559+0+0/resize/840x639!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6d%2Fae%2F9c3e66ea01994a7a64a95622a497%2Fla-fi-hy-easy-rider-motorcycle-headed-to-aucti-001', 
  user: @user1)

@motorcycle2 = Motorcycle.create!(
  name: 'THE BUSA', 
  img_url: 'https://cdp.azureedge.net/products/USA/SU/2020/MC/SUPERSPORT/HAYABUSA/50/CANDY_DARING_RED/2000000003.jpg', 
  user: @user1)

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