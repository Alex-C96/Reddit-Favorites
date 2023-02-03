import Nav from './Nav';

export default function Layout({children} : any){
    return (
        <div>
            <Nav />
            <main>{children}</main>
        </div>
    )
}