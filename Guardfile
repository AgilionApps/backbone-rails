guard 'coffeescript', :output => 'public/javascripts/compiled/src' do
  watch(/^app\/assets\/javascripts\/collections\/(.*)\.coffee/)
  watch(/^app\/assets\/javascripts\/views\/(.*)\.coffee/)
end

guard 'coffeescript', :output => 'public/javascripts/compiled/src/models' do
  watch(/^app\/assets\/javascripts\/models\/(.*)\.coffee/)
end

guard 'coffeescript', :output => 'public/javascripts/compiled/spec' do
  watch(/^spec\/javascripts\/(.*)\.coffee/)
end

guard 'livereload' do
  watch(/^spec\/javascripts\/.+\.coffee$/)
  watch(/^app\/assets\/javascripts\/models\/(.*)\.coffee/)
  watch(/^app\/assets\/javascripts\/collections\/(.*)\.coffee/)
  watch(/^app\/assets\/javascripts\/views\/(.*)\.coffee/)
  watch(/^public\/javascripts\/compiled\/.+\.js$/)
  watch(/^public\/javascripts\/models\/.+\.js$/)
  watch(/^public\/javascripts\/collections\/.+\.js$/)
  watch(/^public\/javascripts\/views\/.+\.js$/)
  watch(/^public\/javascripts\/lib\/.+\.js$/)
end
