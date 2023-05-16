GREETINGS = ['Hello', 'Hi', 'Sasa', 'Greetings', 'Mambo']

5.times do
  Message.create(content: "#{GREETINGS.sample}!")
end
