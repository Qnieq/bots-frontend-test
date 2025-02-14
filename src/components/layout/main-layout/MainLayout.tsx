import { Outlet } from 'react-router-dom';
import "../layout.css"
import { Header } from './header/Header';
import { ToolBar } from './tool-bar/ToolBar';

export function MainLayout() {
    return (
        <div className="flex flex-col items-center justify-between bg-[#112135] text-white min-h-screen">
            <div
                className="w-full h-[400px] fixed top-[-30%] z-20 bg-gradient-radial pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(0,109,195,0.4) 0%, rgba(255,255,255,0) 59%)",
                }}
            ></div>
            <Header />
            <Outlet />
            <ToolBar />
        </div>
    );
}
