class MessagesController < ApplicationController

  def show
    @group = Group.find(params[:id])
    @groups =current_user.groups
  end
end
