const DashboardLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="flex justify-between items-center p-1 bg-blue-500 text-white">
                This is a navbar
            </nav>
            {children}
        </div>
    );
}

export default DashboardLayout;