export const defaultCell = () => {
    
}

export const buildboard = ({ rows, columns }) => {
    const builtrows = Array.from({ length: rows}, () =>
        Array.from({length: columns}, () => ({ ...defaultCell }))
    );

    return {
        rows: builtrows,
        size: { rows, columns }
    };
};