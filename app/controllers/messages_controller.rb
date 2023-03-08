class MessagesController < ApplicationController
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        messages = Message.all
        render json: messages.order(created_at: :desc)
    end
    
    def create
        new_message = Message.create!(message_params)
        render json: new_message, status: :created
    end

 private

    def message_params()
        params.require(:message).permit(:name, :email, :company, :message_subject, :message_contents)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
