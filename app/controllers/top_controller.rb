class TopController < ApplicationController
  def index
    @groups =Group.all
  end
end
