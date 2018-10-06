class Api::CurrentController < ApplicationController
    def index
        @current_user = current_user.id
        # array = []
        # @new_array = array.push('id': @current_user)
        render json: @current_user
    end
end
