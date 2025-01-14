export const formatValue = (value, type) => {
    if (type === 'investment') {
      return `R$ ${value.toLocaleString()}`;
    }
    return value.toLocaleString();
  };
  
  export const getTrendInfo = (data) => {
    const lastMonth = data[data.length - 1].value;
    const previousMonth = data[data.length - 2].value;
    const difference = lastMonth - previousMonth;
    const percentage = ((difference / previousMonth) * 100).toFixed(1);
    
    return `${difference > 0 ? '+' : ''}${percentage}%`;
  };
  