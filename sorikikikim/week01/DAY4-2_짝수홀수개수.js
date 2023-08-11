const solution = (num_list) => {
    return [
        num_list.filter((ele) => !(ele % 2)).length,
        num_list.filter((ele) => ele % 2).length,
    ];
};
