        document.getElementById('show-error-btn').addEventListener('click', function() {
            document.getElementById('error1').classList.add('show')
            setTimeout(function() {
                document.getElementById('error1').classList.remove('show')
            }, 3000)
        })

        document.getElementById('show-success-btn').addEventListener('click', function() {
            document.getElementById('success1').classList.add('show')
            setTimeout(function() {
                document.getElementById('success1').classList.remove('show')
            }, 3000)
        })