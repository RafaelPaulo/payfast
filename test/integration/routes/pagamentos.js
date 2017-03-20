describe('Payment Routes', () => {

    describe('GET /payments', () => {
        it('Should return an "Hello World"', (done) => {
            request
                .get('/payments')
				.expect(200)
                .end((err, res) => {
                    expect(res.statusCode).to.be.equal(200);
                    expect(res.text).to.be.equal('Hello World')

                    done(err)
                })
        })
    })

})
