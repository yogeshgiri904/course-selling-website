        function validateUser()
        {
            var user=document.getElementById('user')
            var valuser=user.value;
            var upattern1=/^[A-Za-z0-9]{3,}$/
            var upattern2=/^(?=.*[0-9]){2,}(?=.*[a-z]){2,}[A-Za-z0-9]{5,}$/
            if(upattern2.test(valuser))
            {
                p0.style.color='green'
                user.style.borderColor='green'
                document.getElementById('p0').innerHTML= 'Congrats "' + valuser + '" USERNAME IS AVAILABLE !'          
            }
            else if(upattern1.test(valuser))
            {
                p0.style.color='red'
                user.style.borderColor='red'
                document.getElementById('p0').innerHTML= '"' + valuser + '" USERNAME IS NOT AVAILABLE !'
                return false;
            }
            else
            {
                p0.style.color='red'
                user.style.borderColor='red'
                document.getElementById('p0').innerHTML='INVALID USERNAME !'
                return false;
            }
        }
        function validateMail()
        {
            var mail= document.getElementById('mail')
            var valmail= mail.value;
            var pattern=/^[A-Za-z.0-9]{3,}@[a-z]{3,}[.]{1}[a-z]{2,}[.]{0,1}[a-z]{0,3}$/
            if(pattern.test(valmail))
            {
                p3.style.color='green'
                mail.style.borderColor='green'
                document.getElementById('p3').innerHTML='Your Email Address is valid.'
                
            }
            else
            {
                p3.style.color='red'
                mail.style.borderColor='red'
                document.getElementById('p3').innerHTML='You are entering an Invalid Email.'

            }
        }

        function strPass()
        {
            var pass=document.getElementById('pass')
            var valpass=pass.value;
            var weak=/^[A-Za-z0-9!@#$%^&*]{0,}$/
            var medium=/^(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{5,}$/
            var strong=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/

            if(strong.test(valpass))
            {
                p1.style.color='green'
                pass.style.borderColor='green'
                document.getElementById('p1').innerHTML='Your Password Strength - Strong'

            }
            else if(medium.test(valpass))
            {
                p1.style.color='orange'
                pass.style.borderColor='orange'
                document.getElementById('p1').innerHTML='Your Password Strength - Medium'

            }
            else if(weak.test(valpass))
            {
                p1.style.color='red'
                pass.style.borderColor='red'
                document.getElementById('p1').innerHTML='Your Password Strength - Weak'

            }
            else
            {
                p1.style.color='red'
                pass.style.borderColor='red'
                document.getElementById('p1').innerHTML='CAUTION!!! You are entering an Invalid Charactor.'
            }
        }
        function validatePass()
        {
            var pass=document.getElementById('pass')
            var valpass=pass.value;
            var cpass=document.getElementById('cpass').value
            if(valpass.match(cpass))
            {
                p2.style.color='green'
                cpass.style.borderColor='red'
                document.getElementById('p2').innerHTML='PASSWORD MATCHED'
            }
            else
            {
                p2.style.color='red'
                cpass.style.borderColor='green'
                document.getElementById('p2').innerHTML='PASSWORD NOT MATCHED !'
                return false;
            }
        }


        