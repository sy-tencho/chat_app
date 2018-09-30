class Api::UsersController < ApplicationController
    def index
        if params[:input] == ''
            render json: nil
        else
            @username = User.search(params[:input])
            render json: @username
        end
    end
end
