module MessagesHelper
  def user_names(group)
    users = group.users
    users.pluck(:name).join(" ")
  end
end
