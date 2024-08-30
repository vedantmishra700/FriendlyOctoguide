import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
    const { id } = useParams(); 
    const [data, setData] = useState({});

    const getsingle = async() => {
        try {
            if (!id) return;
            console.log("Passing id", id);
            const response = await fetch(`http://localhost:8000/${id}`);
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getsingle();
    }, [id]);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.header}>Data Details</h2>
                <ul style={styles.listGroup}>
                    {Object.entries(data).map(([key, value]) => (
                        <li key={key} style={styles.listItem}>
                            <strong style={styles.label}>{key}:</strong> {value?.toString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    card: {
        width: '100%',
        maxWidth: '600px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    },
    listGroup: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
    },
    label: {
        color: '#555',
        marginRight: '5px',
    },
};

export default View;