guard 'coffeescript', :output => 'public/javascripts/compiled' do
  watch(/^spec\/javascripts\/(.*)\.coffee/)
  watch(/^spec\/javascripts\/models\/(.*)\.coffee/)
  watch(/^spec\/javascripts\/collections\/(.*)\.coffee/)
  watch(/^spec\/javascripts\/views\/(.*)\.coffee/)
end

guard 'coffeescript', :output => 'public/javascripts/models' do
  watch(/^app\/assets\/javascripts\/models\/(.*)\.coffee/)
end

guard 'coffeescript', :output => 'public/javascripts/collections' do
  watch(/^app\/assets\/javascripts\/collections\/(.*)\.coffee/)
end

guard 'coffeescript', :output => 'public/javascripts/views' do
  watch(/^app\/assets\/javascripts\/views\/(.*)\.coffee/)
end

guard 'coffeescript', :output => 'public/javascripts/lib' do
  watch(/^app\/assets\/javascripts\/lib\/(.*)\.js/)
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
