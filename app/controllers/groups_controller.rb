class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def edit
    @group = Group.find(params[:id])
  end

  def create
    @group = Group.new(groups_params)
    if @group.save
    redirect_to :root
    else
    render 'new'
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(groups_params)
    redirect_to :root
    else
    render 'edit'
    end
  end

  private
  def groups_params
    params.require(:group).permit(:name, :user_ids => [])
  end

end
