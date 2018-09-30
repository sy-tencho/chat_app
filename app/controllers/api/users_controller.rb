class Api::UsersController < ApplicationController
    def index
        @username = User.search(params[:input])
        render json: @username
    end
end
