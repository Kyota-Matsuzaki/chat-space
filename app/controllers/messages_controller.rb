class MessagesController < ApplicationController

  def index
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @message = Message.new
    end

  def create
    @message = Message.new(messages_params)
    if @message.save
    redirect_to group_messages_path(params[:group_id])
    else
    redirect_to group_messages_path(params[:group_id]), alert: "メッセージを入力して下さい"

   end
 end

  private
  def messages_params
    params.require(:message).permit(:name).merge(user_id: current_user.id, group_id: params[:group_id])
  end
end
