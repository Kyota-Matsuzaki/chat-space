class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def edit
    @group = Group.find(params[:id])
  end

  def create
    Group.create(groups_params)
    redirect_to "/"
  end

  def update
    group = Group.find(params[:id])
    group.update(groups_params)
    redirect_to "/"
  end

  private
  def groups_params
    params.require(:group).permit(:name, {:user_ids => []})
  end

end
