describe 'Index', ->
  describe 'GET /', ->
    it 'shows wellcome message', (done) ->
      request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect(200, done)
