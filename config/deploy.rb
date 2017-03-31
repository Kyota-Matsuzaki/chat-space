lock '3.8.0'

set :default_env, {
    rbenv_root: "/usr/local/rbenv",
    path: "~/.rbenv/shims:~/.rbenv/bin:$PATH",
    aws_access_key_id: ENV["ACCESS_KEY_ID"],
    aws_secret_access_key: ENV["SECRET_ACCESS_KEY"],
    resion: 'ap-northeast-1'
}
set :whenever_identifier, ->{ "#{fetch(:application)}_#{fetch(:stage)}" }
set :sidekiq_queue, :carrierwave
set :application, 'chat-space'
set :repo_url, 'git@github.com:Kyota-Matsuzaki/chat-space.git'

set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

set :rbenv_type, :user
set :rbenv_ruby, '2.3.1'

set :ssh_options, auth_methods: ['publickey'],
                  keys: ['/Users/kyota/.ssh/keyofEC2.pem']

set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }
set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb" }

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end