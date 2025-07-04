import React from 'react';
import './NotificationsPanel.css';

interface Notification {
    id: string;
    type: 'reserva' | 'recordatorio' | 'calificacion' | 'otro';
    message: string;
    date: string; // Fecha en formato legible o ISO
}

interface NotificationsPanelProps {
    notifications: Notification[];
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ notifications }) => {
    return (
        <div className="notifications-panel">
            <h3>Notificaciones</h3>
            {notifications.length === 0 ? (
                <p className="no-notifications">No tienes notificaciones pendientes.</p>
            ) : (
                <ul className="notification-list">
                    {notifications.map((notif) => (
                        <li key={notif.id} className={`notification-item ${notif.type}`}>
                            <div className="notification-message">{notif.message}</div>
                            <div className="notification-date">{notif.date}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationsPanel;
