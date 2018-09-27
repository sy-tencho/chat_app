class Api::UsersController < ApplicationController
    def index
        @users = User.search(params[:input])
        render json: @users
    end
end
