const isLogoedIn=(state=false,action)=>
{
    switch(action.type)
    {
        case 'sigh-in':
            return !state;
            default:
        return state;
    }
}
export default isLogoedIn;