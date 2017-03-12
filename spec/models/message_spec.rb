require 'rails_helper'


describe Message do
  describe '#create' do

    it "is valid with name" do
      message = build(:message)
      expect(message).to be_valid
    end


    it "is invalid without a name" do
      message = build(:message, name: nil)
      message.valid?
      expect(message.errors[:name]).to include("can't be blank")
    end


  end
end