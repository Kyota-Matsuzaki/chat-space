class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    Group.create(groups_params)
  end

  def update
  end

  private
  def groups_params
    params.require(:group).permit(:name, {:user_ids => []})
  end

end
