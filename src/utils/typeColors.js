export const getTypeColor = (type) => {
    const colors = {
        normal: 'secondary',
        fire: 'danger',      // Red - matches fire
        water: 'primary',    // Blue - matches water
        electric: 'warning', // Yellow - matches electric
        grass: 'success',    // Green - matches grass
        ice: 'info',         // Light blue - matches ice
        fighting: 'dark',
        poison: 'danger',
        ground: 'warning',
        flying: 'info',      // Light blue - matches flying
        psychic: 'danger',
        bug: 'success',
        rock: 'secondary',
        ghost: 'dark',
        dragon: 'primary',
        dark: 'dark',
        steel: 'secondary',
        fairy: 'danger'
    };
    return colors[type] || 'secondary';
};