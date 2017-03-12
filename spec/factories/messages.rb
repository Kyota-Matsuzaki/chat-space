FactoryGirl.define do

  factory :message do
    name              {Faker::Name.name}
  end

end