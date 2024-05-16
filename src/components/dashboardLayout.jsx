import { LogoutBtn } from "./auth/logoutBtn";

export const DashboardLayout = ({ isUser, name, children }) => {
  return (
    <div>
      <header className="p-6 flex justify-between items-center">
        <div>EcoHelp</div>
        <div className="flex items-center gap-4">
          {isUser ? <div>Pengaduan</div> : <div>Buat Event</div>}
          <div>{name}</div>
          <LogoutBtn />
        </div>
      </header>
      <main className="px-6">{children}</main>
    </div>
  );
};
