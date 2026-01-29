

export default function DashboardLayout({
    children,
}:{
    children:React.ReactNode;
}){ 
    return(
        <section>
            <aside> Dashboard Sidebar</aside>
            <main> {children}</main>
        </section>
    );
}