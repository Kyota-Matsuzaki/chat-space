require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['SECRET_ACCESS_KEY'],
    region: 'ap-northeast-1'
  }

set :default_env, {
    rbenv_root: "/usr/local/rbenv",
    path: "~/.rbenv/shims:~/.rbenv/bin:$PATH",
    aws_access_key_id: ENV["ACCESS_KEY_ID"],
    aws_secret_access_key: ENV["SECRET_ACCESS_KEY"],
    resion: 'ap-northeast-1'
}
set :whenever_identifier, ->{ "#{fetch(:application)}_#{fetch(:stage)}" }
set :sidekiq_queue, :carrierwave

    case Rails.env
    when 'development'
        config.fog_directory  = 'chat-space1'
        config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/chat-space1'
    when 'production'
        config.fog_directory  = 'chat-space1'
        config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/chat-space1'
    end
end