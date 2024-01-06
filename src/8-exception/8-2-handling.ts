{
    class TimeoutError extends Error{}
    class OfflineError extends Error{}
    
    class NetworkClient{
        tryConnect() : void {
            throw new OfflineError('no network!!');
        }
    }
    
    class UserService{
        constructor(private client : NetworkClient){}
        login(){
                this.client.tryConnect();
        }
    }
    
    class App{
        constructor(private userService : UserService){}
        run() {
            try{
                this.userService.login();
            }catch(error){
 // catch로 오는 순간 any type으로, 타입을 잃어버리기 때문에
            // instanceof를 사용할 수 없다.
/*             if(error instanceof OfflineError){
                //
            }
 */
            // exception 적정한 위치, 효율적 예외 이외의 상황을 보여줄 수 있는 곳
            //show dialog to user(일시적인 오류가 있습니다.)
            }
            
        }
    }
    
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    //service.login();
    app.run();
    
    }