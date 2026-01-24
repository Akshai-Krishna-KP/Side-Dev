# The Plan of Execution

1. Check wether the user has a valid JWT.
2. The SignUp page will request username and college ID.
3. We map collegeID to college Email
4. send an OTP to Email
5. Verify the OTP
6. Create JWT and store it in the memory
7. in future case user can directly login without any verification using JWT
