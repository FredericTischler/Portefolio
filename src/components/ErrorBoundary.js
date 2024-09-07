import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Met à jour l'état afin de rendre l'UI de repli au prochain rendu.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Vous pouvez également enregistrer l'erreur dans un service de rapport d'erreurs
        console.log("Error logged:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Vous pouvez personnaliser le rendu d'erreur ici
            return <h2>Quelque chose s'est mal passé.</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
