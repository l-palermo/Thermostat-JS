require 'sinatra/base'

class Thermostat < Sinatra::Base
    enable :sessions

    get '/' do
      erb :index
    end

    get '/thermostat' do-
      session[:temp_up]
    end

    post '/thermostat' do
      session[:temp_up] = params[:temp_up]
      # p session[:temp_up]
      200
    end

    run! if app_file ==$0
end