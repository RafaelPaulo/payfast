describe('Payment Routes', () => {

    describe('GET /payments', () => {
        it('Should return an "Hello World"', (done) => {
            request
                .get('/payments')
                .end((err, res) => {
                    // expect(res.statusCode).to.be.equal(200);
                    // expect(res.body).to.be.equal('Hello World')

                    // done(err)
                    done(res)
                })
        })
    })

})
