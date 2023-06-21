export default useWielkopolskie = () => {
  const wielkopolskie = [
    {
      name: 'Powiat Chodzieski',
      id: '023016001000',
      type: 'county',
      level: '6',
      data: (
        <path d="M91.5 105.844l1.688 3.812 1.687 3.844-.25 4.5 1.656 4.687 1.875 2.813 4.5 1.094 2.563 2.125 3.438 3 3.28-.313 2.938-.125 3.313-.125 3.093.906 1.25-1.187-1.375-2.469.75-3.094 1.594-3.28 3.344-2.032 5.188-.781-1-2.625 2.812-1.844-.125-2.781 1.594-2.938-.125-3.281-.125-4.344 2.625-.312 3.094.062 2.28-2.062L145 97.406l-.125-2.625-.312-3.094.656.125-.406-.312-2 .5-3.281-.219-2.75-.906-2.438-.031-3.625.625-4.344.625-3.812.125-3.844.812-3.625.469-2.625 1-3.125.812-3.125.5-4.5-.406-3.313-.25-.687 1.031-1.25 2.25-1.938 2.907-1.968 2.593-1.063 1.907z"></path>
      ),
    },
    {
      name: 'Powiat Międzychodzki',
      id: '023015914000',
      type: 'county',
      level: '6',
      data: (
        <path d="M9.031 182.406l.282.031 3.468-.28 2.72 5.062 3.812-.47 2.156-5.874 3.625.406 1.25-2.594 2.438-.125 2.937.75 1.688 3.813 4.5-1.313.03-2.437 1.594-.844 2.282-2.219.03-2.593 2.095-1 .03-2.094 2.782-.813.219-2.25-1.719-2.28.031-1.72 1.594-1.718 4.313.593.03-2.093-.656-2.594-3.812-.406-2.406-1.094-1-2.25-1.907-.031-1.875-1.594-.843-2.25-1.907.125-1.906-.375-1.906-.188-1.906-.562-1.532-1.219-2.593-.375-1.875-1.937-2.594-1.438-1.188-1.75-3.75-2.656-.625-.094-.375 1.219-1.968 2.094-2.844.843-4.594.657-3.719.812-1.25.875.344.875.313 2.844-.563 2.094-2.281.687.125 3.156 1.375 1.813.312 2.469.313 2.656 1.219 1.594 1.406 1.437.312 2.125.5 2.469.157 2.281.156 1.438 2.406 3.187.656 2.844.094 2.281z"></path>
      ),
    },
    {
      name: 'Powiat Kępiński',
      id: '023015708000',
      type: 'county',
      level: '6',
      data: (
        <path d="M219 364.312l-.531-.375-2.031-2.812-1.906.844-1.72-2.813-2.28 2.563-1.594 2.406-1.063 1.906-2.062-1.062-2.125 1.875-2.219-1.594-1.188-2.094-2.093 2.375-2.625-.03-1.906 1.343-1.25 2.594-1.938 1 .5 2.78-2.438.5-2.406-1.593-.437-.03-.563 2.218-1.125 3.312.125 4.25 1.563 2.844.656 2.656 1.75 1.25 1.375 1.438 2.656.03 1.563 1.626-.375 2.281-.75 2.813-1.813 2.093v1.938l3.688 1.312 3.125 1.625 3.375-1.187 3 .562 8.687-2.687 4.5-5.063 2.813.22 1.594-.5 1.75.03h.312c-.023-.332.018-.681.063-1 .066-.482.486-.87.593-1.344.17-.75.239-1.512.25-2.28.008-.59.578-1.122.969-1.657l1.75-2.594.031-2.094-.344-2.28.22-2.25-.75-1.345h-1.5l-2.657.532-2.063-.407-.156-2.093.219-3.22-.125-3-.938-2.093-1.468-2.312 1.312-1.407z"></path>
      ),
    },
    {
      name: 'Powiat Szamotulski',
      id: '023016124000',
      type: 'county',
      level: '6',
      data: (
        <path d="M37.625 181.906l.282.25 2.062.563 1.719 2.093 3.093 1.094 1.907 1.406 2.218 1.75 3.594 2.657 2.407 1.78 1.718.188-.03 2.782 2.624-1.875 1.563 1.062-.75 2.938 1.53 2.28 3.626-.124 1.406-1.031 1.594-2.22 1.906.532 1 2.625 2.25-.844.406-3.625 2.094-.312-.312-2.094-3.813-.75.563-2.25 4.5-.094-.313-2.937 2.125-3.094 3.031-5.156-1.03-2.094 1.25-.844 2.062.032 1.75.187.468 1.906 2.782.22.03-2.438 1.095-3.438-.5-1.75-4 .125-1.375-.719-.47-2.593-2.374-2.47-.469-3.655-1.375-1.563-.5-2.437-1.156-2.438 3.156-2.719-1.719-1.78-2.406-.907-1.375-1.031.563-2.25-.438-3.407-2.469.25-3.093-1.437-3.813-.406-2.625 1.875-1.531-1.25 1.594-2.407-2.938-1.75-2.594-.75-2.25-.03-.562 3.28-2.594.313-1-3.656-3.812.312-3.25-2.312-2.75-1.438L38.25 134l-3.468.125-2.625 2.563-2.094 1.687-1.594 1.031-1.406 1.875-1.406 2.219-1.72-1.219-2.624.125 1.187 1.75 2.594 1.438 1.875 1.937 2.594.375 1.531 1.219 1.906.563 1.907.187 1.906.375 1.906-.125.844 2.25 1.875 1.594 1.906.031 1 2.25 2.406 1.094 3.813.406.656 2.594-.031 2.093-4.313-.593-1.593 1.718-.032 1.72 1.72 2.28-.22 2.25-2.78.813-.032 2.094-2.094 1-.031 2.593-2.281 2.22-1.594.843-.031 2.437-.281.094z"></path>
      ),
    },
    {
      name: 'Powiat Nowytomyski',
      id: '023015915000',
      type: 'county',
      level: '6',
      data: (
        <path d="M3.5 227.969l.656.156 2.782-.156 1.75-1.532 2.937-.125 1.094-2.062 2.594.219 2.593-.657.188-1.562 2.281-.656 1.563-1.72 2.25.032 2.094.031 6.187 3.375 1.594-2.75.375-2.406 2.281-1.687 6.25-.782 2.438-.656 2.78.563 5.345 1.968 3.593 2.657 1.563-.5 1.937-1.032 1.532 1.25 2.062.907 2.625-2.407-1-2.093.719-2.75-3.438-.563.875-1.906 1.406-1.375.407-3.094-2.938-1.437-1.344-1.75.375-2.594h-.343l-1.532-2.281.75-2.938-1.562-1.062-2.625 1.875.031-2.782-1.719-.187-2.406-1.781-3.594-2.657-2.218-1.75-1.907-1.406-3.093-1.094-1.72-2.093-2.062-.563-.28-.25-4.22 1.219-1.687-3.813-2.938-.75-2.437.125-1.25 2.594-3.625-.406-2.156 5.875-3.813.469-2.719-5.063-3.468.281-.282-.03.032 1.25-.032 2.312-.875 1.375-1.78.687-1.782-.187-1.375-.907-1.094 1.375L4.031 191l1.75 1.437 2.094 1.25 1.406.907-.03 1.593-.907 1.594-.219 2.281-.187 2.282-.031 2.312.468 3.156-1.437 3-1.281 2.625-1.282 1.907-.718 2.468-.063 3.344-.062 3.719-.032 3.094z"></path>
      ),
    },
    {
      name: 'Powiat Grodziski',
      id: '023015905000',
      type: 'county',
      level: '6',
      data: (
        <path d="M23.532 219.906l.625 2.938-.032 3.312.813 2.594-1.594 2.25-.031 2.594 2.781-.657 3.656-1.156 2.063 1.25-.906 2.063.843 2.25 3.094 2.812 2.406-.312.688 1.406L36 242.969l.844 1.906 3.469-.469 1.719 2.094 1 2.781 2.406-.312 2.812-1.344 3.094.219 1.344 3.656 3.781 2.312 3.469-.28.375-1.907.906-2.406 1.25-2.407 3.125-1.687 1.438-2.406 3.468-1 1.25-1.375.72-3.438 1.937-2.25-.282-3.469-.625-3.968-1.375-1.938-1.906-.562.219-1.532 1.562-1.03 1.407-1.72.218-2.75-.343-1.562-.5-.875-2.094.656-2.25.656-2.094.5-.187-.093.687 1.468-2.625 2.407-2.062-.907-1.532-1.25-1.937 1.032-1.563.5-3.593-2.657-5.344-1.968-2.781-.563-2.438.656-6.25.782-2.281 1.687-.375 2.406-1.594 2.75-6.187-3.375-2.094-.03h-.656z"></path>
      ),
    },
    {
      name: 'Powiat Obornicki',
      id: '023016116000',
      type: 'county',
      level: '6',
      data: (
        <path d="M89.531 171.281l2.782-.125.468 2.594 1.188 2.094 1.406-.313-.156-2.937 2.125-1.532 2.594-.843 2.25.375 2.437-.813 1.406-1.187 3.125-.844-.656-1.375-1.719-1.438-1.906-.875.906-2.406 1.563-.156.906-2.594 3.125.031 1.906-1.156 2.813-2.062 2.594-.313 1.593-1.187 2.25.03 2.782-.312 1 1.594 1.375.531.906-1.375-1-2.437-1.156-4 2.093-.844-.656-2.437-.312-2.782-.469-3.625-1.406-.03-2.094 1.718-3.969-.406-2.219-2.282.375-2.437-.437-3.938-2.469.094-2.937.125-3.282.313-3.437-3-2.563-2.125-4.5-1.094-1.875-2.813-.03-.125-2.407 1.47L91.25 124l-2.593.656-.032 2.094 1.875.875.313 2.437 1.719 1.75 2.03 2.125 1.72 2.782-.907 1.562-1.937 2.031-.875 1.563-.906 3.094-.907 2.25-3.312.468-.313-2.25.563-1.562-2.063-1.406-2.25-.563-3.656.656-3.656.813-.469.062.438 3.407-.563 2.25 1.375 1.03 2.406.907 1.72 1.781-3.157 2.72 1.156 2.437.5 2.437 1.375 1.563.469 3.656 2.375 2.469.469 2.593 1.375.72 4-.126z"></path>
      ),
    },
    {
      name: 'Powiat Wrzesiński',
      id: '023015830000',
      type: 'county',
      level: '6',
      data: (
        <path d="M148.906 207.25l1.438 1.812 2.594.032 1.187 2.468-1.437 3.094 1.344 2.969.843 1.562 2.25.188 2.938-.813 1.187 2.625-2.812 2.907-2.281 1.343.5 1.407 1.874 3.125-.03 1.75-3.657.812-.719 2.938 1.344 2.78 1.156 2.626.5 2.437.875.344 1.563-1.344 2.281-2.062 4.156-.281 4.844.406 3.844-.281 1.031.53.313 1.563.468 2.782-.03 2.437.655 1.906 1.532 2.782 2.437.375 2.438-1.5 4-.657 3.28-.28.188-.876-2.906-3.344-.812-2.062 2.687-6.031 2.25.187.719-3.625-2.938-.719-2.375-1.937-1.187-2.969 1.781-1.875.188-2.094-2.063-2.093-3.781-1.438-3.219-5.594 4.375-1.343.344-1.375-1.688-2.438-1.875-3.156.688-3.531-.625.062-2.594-1.25-4.812-.937-2.407-1.75-4.5-.594-2.062-.719-4.156-.594-.375 2.094.125 2.406-1.563-.187-1.531-2.094-1.875-1.781-3.094-1.406.125-.375-.125.03-3.812 1.657-.407 2.094 1.72 2.781.124 2.438-.437 1.656z"></path>
      ),
    },
    {
      name: 'Powiat Turecki',
      id: '023015827000',
      type: 'county',
      level: '6',
      data: (
        <path d="M232.906 256.812l.282.22 1.344 2.624.656 2.625.812 3.281 2.219 2.125 1 3.125 2 4.188 2.063 2.812 3.468.22 2.219.374.844 2.094.844 1.906 2.937 1.625 1.875 1.906 1.188 1.594.406.531.093-.343 2.625.218 1.5 1.75 1.5.188 2.657-1.281 3.218.437 3.563 1.563 2.219.562 1.5-1.969L277 287.97l.844-1.657.844-1.812.968-1.625c.68-.997 1.407-1.705 2-2.531.568-.791.728-1.83 1.188-2.688.346-.644.894-1.18 1.281-1.812l-2.031-1.938-.75-1.5-.906-2.469-.344-2.656.875-2.062c-.163-.321-.414-.646-.625-1-.439-.737-.905-1.477-1.094-2.313-.24-1.061-.137-2.194-.156-3.281-.016-.894.213-1.813.031-2.688-.048-.23-.177-.46-.25-.687l-.656-.719-.813-.312-1.53-1.407-1.032-1.25-.656-2.78-.125-2.75.218-3.126-.53-.875-2.063.844-1.75 1-2.094-.906-1.875-.532-3.281-.406-2.938-.906-3.437-2.469-2.063-1.594-.031-.093.031.281-4 .281-3.344 3.594-2.75-.375-2.312 3.406-3.781-.906-1.782 2.406-4.718 2.688-.563 2.093v2.063l.813 2.094 1.187 2.093-.094.125z"></path>
      ),
    },
    {
      name: 'Powiat Śremski',
      id: '023016126000',
      type: 'county',
      level: '6',
      data: (
        <path d="M94.375 233.062l-1.469 5.157 2.907 3.687 2.906 1.594.5 2.094 2.219 1.062-.719 3.281 3.438.75 1.03 1.75-1.593 2.407-.906 2.75 1 1.593 2.781-.156 2.063 1.438.843 1.218 2.625-.5.656 1.938 1.375 1.562 3.594 2.313-1.781 2.75 2.594 1.594 2.593.562 1.375-.344 2.094-1.343-.312-2.094 2.281-1.531 1.906-.313 1.938-1.687 2.094-.688 3.124-.125 2.594.406 1.719.532 3.469-1.157.719-2.843-2.407-1 2.656-2.907-1.187-1.062-2.813 1.187-1.53-1.25.593-4.156 2.094-.812.531-1.75-3.125.312-2.75-1.437-1.906-.375-2.938.156-3.469.469-2.093.125.218-2.75.563-3.282-1.531-1.593-.657-2.094-2.25-1.594.375-1.375-.656-1.75-.031-.031-.844.375-2.968 1.344-1.594 2.218-2.219-2.812-2.219-2.281-4.187 1.843-2.031-2.78-2.594-.563-1.25 1.375-1.875-.375-5.406.968h-.157z"></path>
      ),
    },
    {
      name: 'Powiat Kościański',
      id: '023015911000',
      type: 'county',
      level: '6',
      data: (
        <path d="M58.938 253.625l.906 5.437-3.719 6.032 2.063 2.78 3.093-.28 1.938-.344 2.938-1 1.906.562 3.656-1 3.469-.28 2.062.874 4.531-.437 3.094.562 3.813.75 1.343 1.906 2.782.22L94.344 271l1.719.719 3.125.906 2.75.562 1.75-1.53 1.906-.657 2.469-1.531 2.968-1.188.032-2.594 1.906-1.343.656-.125-.969-1.094-.656-1.938-2.625.5-.844-1.218-2.062-1.438-2.781.156-1-1.593.906-2.75 1.594-2.407-1.032-1.75-3.437-.75.719-3.28-2.22-1.063-.5-2.094-2.905-1.594-2.907-3.687 1.47-5.157-2.25-.218-.47-3.657-3.468-.906-3.313 1.5L81.094 228l-1.563 1.531-2.812 2.063-2.281 2.375-.094-.032.063.72-1.938 2.25-.719 3.437-1.25 1.375-3.469 1-1.437 2.406-3.125 1.687-1.25 2.407-.906 2.406-.375 1.906-1 .094z"></path>
      ),
    },
    {
      name: 'Powiat Leszczyński',
      id: '023015913000',
      type: 'county',
      level: '6',
      data: (
        <path d="M53.594 260.187l-2.781 2.22-3.125-.75-2.125 3.093-2.282 2.219-1.593 2.75-2.782-.032-1.906.5-2.937-.562-3.282-.406-2.093-.375h-.469l-.25 1.218-.563 1.563-1.406.687-.375 1.22 1.032 1.093 2.312-.156 2.25 1.093L33.344 277l1.031 1.625.313 1.406 1.593.375 1.97-1.031.374-2.125 1.094-2.094 1.063-.875 2.468.031 1.407 1.094 1.906 1.781 2.125.407-.063 2.625 1.407.75 2.125.906 1 2.844.312 3.343-.406 3.344 1.031 1.969-.094.187c.672.022 1.33.145 2 .22 1.15.127 2.384.034 3.47.437.946.35 1.522 1.394 2.468 1.75.717.27 1.514.02 2.281.03.767.012 1.566-.144 2.313.032.564.134 1.077.453 1.53.719l.438 1.406 1.407.719 2.28.406 2.095.906 1.937.72.688 1.437 1.03 2.125 1.407 1.093.125 1.938-.156.094.812-.063 2.97-1.875 2.468-2.375.375-2.594 1.156-6.562 2.406.031 2.094-.5 2.438.031 2.593-.812 1.407-1.032.906-2.593.219-2.938 1.062-2.062 2.438-1.688-2.344-3.844-1.875-2.968-.125-3.375-2.25-.657-1.719-.718-1.531-1.594-2.781-.219-1.344-1.906-3.813-.75-3.093-.563-4.532.438-2.062-.875-3.469.281-3.656 1-1.906-.562-2.938 1-1.937.343-3.094.282-2.063-2.782.188-.312-2.406-1.469 1.406-1.375-1.719-1.75z"></path>
      ),
    },
    {
      name: 'Miasto Leszno',
      id: '023015963000',
      type: 'city',
      level: '6',
      data: (
        <path d="M74.969 279.906l.5 1.906-1.063 1.907.313 1.906-1.063 1.719-1.25 2.562-4.843.125-1.688-2.625.563-2.937-.157-2.094 1.75-.156 1.22-1.532 2.093.032 1.875.375 1.75-1.188z"></path>
      ),
    },
    {
      name: 'Powiat Rawicki',
      id: '023015922000',
      type: 'county',
      level: '6',
      data: (
        <path d="M134.688 318.969l-.125-.782-.781-5.03-3.282-.563-3.969-1.625-2.562-2.282-2.781.282-2.032-3.313-4 1.344-.75 2.406-3.28.469-1.72-1.406-3.28-1.782-2.938-.562-2.594 1.187L98 306.75l-.156-2.781-1.688-1.594-3.968-1.25-6.407.719-.218 1.437-2.469 2.375-2.969 1.875-.812.063-1.094.75-1.406.875-.219 2.28.5 1.97 1.75.53 2.313.563 1.562.907 2.625.75 3.875.593.844 4.063.5 1.437.843 1.938 1.063 1.062 2.438 1.094 2.843.406 2.281.375 2.094 1.282 2.25 2.156 3 1.281 2.281-.156 1.97-.313 2.468-.343 2.094.406 1.25-.688.375-1.062 1.781-1.375 2.125-.156 2.281.75 2.281.562 3.563-1.031 1.938-.125.874-.875.563-1.25-.125-2.813-.156-2.125.719-1.562 1.03-.781z"></path>
      ),
    },
    {
      name: 'Powiat Gostyński',
      id: '023015904000',
      type: 'county',
      level: '6',
      data: (
        <path d="M124.156 308.844l.157-1.72 3.656-.468.906-2.75-2.031-2.469 2.344-6.03 3.625.75 1.687 1.75 3.125-.282 1.156 3.469 3.157-.813 1.406-3.281-1.688-2.281.72-2.25 1.25-2.563-.126-2.781-3.812-.75.031-1.563 3.812-.812-.468-1.75-.844-1.906-.5-2.094-1.188-2.594-1.875-1.781-.312-2.781-1.531-1.22-1.875-1.405-2.438-.75-3.156-2.22.125.313-.188-.312-.906.781-1.906.313-2.281 1.53.312 2.095-2.094 1.343-1.375.344-2.593-.562-2.594-1.594 1.781-2.75-3.594-2.313-.406-.468-.656.125-1.906 1.343-.031 2.594-2.97 1.188-2.468 1.53-1.906.657-1.75 1.531-2.75-.562-.469-.125v.031l-.125-.094-.281-.062.125 3.375 1.875 2.969 2.344 3.843-2.438 1.688-1.062 2.062-.22 2.938-.905 2.594-1.407 1.03-2.593.813-2.438-.03-2.094.5-2.406-.032-1.156 6.563-.156 1.156 6.406-.719 3.969 1.25 1.687 1.594.156 2.781 2.594.563 2.594-1.188 2.937.563 3.282 1.78 1.718 1.407 3.282-.469.75-2.406 4-1.344 2.03 3.313 2.782-.281.188.156z"></path>
      ),
    },
    {
      name: 'Powiat Krotoszyński',
      id: '023015712000',
      type: 'county',
      level: '6',
      data: (
        <path d="M166.688 328.5l.5-.313.719-3.812.562-2.406-.5-1.407-2.938.5.875-2.093-.312-2.063.719-1.719 2.281-1.375 2.969-.812.344-1.719 1.062-1.562 2.813-2.563-.813-2.937 1.563-.844 2.593.187 1.781-2.375-1.875-1.593-2.062-2.47-2.031-2.624-.031-.219-.313.406-2.594-.75-.812-4.156-2.406-1.437-2.25.656-3.094-1.938.219-2.78-1.188-2.438.063-3.875-1.407-.125-3.125.656-2.062-.375-2.438 1.531-2.093.656-2.782-.218-3.812-.75-2.594-.22h-.281l.281 1.22.844 1.906.469 1.75-3.813.812-.031 1.563 3.812.75.125 2.781-1.25 2.563-.718 2.25 1.687 2.28-1.406 3.282-3.156.813-1.157-3.47-3.125.282-1.687-1.75-3.625-.75-2.344 6.031 2.031 2.47-.906 2.75-3.656.468-.156 1.719 2.375 2.125 3.968 1.625 3.282.562.78 5.031.126.782.406-.282 2.469-.656 3.187-.312 4.594.062 3.5 1.125 3 .906 3.156.594 2.657.563 3.125 1.968 2.468 1.47 1.188 2.468 2.25 1.625z"></path>
      ),
    },
    {
      name: 'Powiat Ostrowski',
      id: '023015717000',
      type: 'county',
      level: '6',
      data: (
        <path d="M183.25 353.219l.219-.875 1.563-1.72 3.156-1.343-.844-2.094-3.656.47-.625-3.313 1.562-1.532 3.156-.812 3.25 2.125 2.97-.656 1.937-2.75 1.781-2.907 4.188-3.593 1.78-3.094 2.25-.313 1.782-1.875 2.219 1.594.844 1.906 2.25.032 1.718 1.25 2.063.906 2.937 1.062 2.219 1.938 1.219-1.375 1.25-1.188-1-2.437-1.375-1.563L220 329.47l-2.406-1.094-2.063-1.75-.812-2.781-.469-3.125 1.25-2.594 2.094-1.531.375-1.375v-1.563l-.5-1.375-2.063-.031-.25-2.406-.78.468-1-1.906-2.782.469-1.875-2.281 1.594-1-.844-2.438.219-2.437.562.156-.156-.281-1.969.093-.656-3.125-2.406-1.062-2.094 1.187-5.375-1.468L194 294.78l-2.094.5-4.343.094-2.938-.375-1.156-3.156-2.594-.532-2.969 1.688-2.093.125-.906 1.156.03.219 2.032 2.625 2.062 2.469 1.875 1.593-1.78 2.375-2.595-.187-1.562.844.812 2.937-2.812 2.563-1.063 1.562-.343 1.719-2.969.812-2.281 1.375-.719 1.72.313 2.062-.876 2.093 2.938-.5.5 1.407-.563 2.406-.718 3.812-.469.313 1.531 2.687.156 2.813-1.093 2.625-1.438.875-2.125 1.187-.719 1.063-.218 1.75-.563 2.312.688 2.282.687 1.968 1.375 1.25.156 2.657-.03 2.093 1.374.907 3.719-.282 1.625-1.406 2.094.031 1.937 1.625 2.469.375 1.75.75L181.5 355l.219-1.22 1.406-.687.125.125z"></path>
      ),
    },
    {
      name: 'Powiat Ostrzeszowski',
      id: '023015718000',
      type: 'county',
      level: '6',
      data: (
        <path d="M246.094 337.094l-.563-.157-2.937-.406-2.063-.187-2.25-1.438-2.75-.031-3.468.812-2.969 1.188-3.094-1.781-1.75.156-1.062 1-1.219 1.375-2.219-1.938-2.937-1.062-2.063-.906-1.719-1.25-2.25-.031-.843-1.907-2.219-1.593-1.781 1.875-2.25.312-1.781 3.094-4.188 3.594-1.781 2.906-1.938 2.75-2.969.656-3.25-2.125-3.156.813-1.562 1.53.625 3.313 3.656-.468.844 2.093-3.156 1.344-1.563 1.719-.219.875 1.438 1.312.344 1.25-1.438.844-1.063 1.938-.937 2.812.5 1.938 1.563 1.093.5 3.188 1.374 1.781.344 1.938-.187.78.437.032 2.406 1.594 2.438-.5-.5-2.782 1.938-1 1.25-2.593 1.906-1.344 2.625.03 2.094-2.374 1.187 2.094 2.219 1.593 2.125-1.875 2.062 1.063 1.063-1.906 1.594-2.407 2.28-2.562 1.72 2.812 1.906-.843 2.031 2.812.531.375.594-.625 3.219.219 1.156-2.25L225.5 360l3.594.593 1.75-3.562-.156-3.188-2.031-2.312 2.687-2.031 11.438 5.625 3.124-7.125 1.72-1.657-.126-4.75-.344-2.437-1.093-1.906.031-.157z"></path>
      ),
    },
    {
      name: 'Miasto Kalisz',
      id: '023015761000',
      type: 'city',
      level: '6',
      data: (
        <path d="M215.156 309.844L217 308.78l3.656.25 1.25-2.937 2.094-1-.125-2.97-2.937-2.28-.469-2.094-1.188-1.406-2.437-.532-1.938 1.875-2.406.125-.093.25.062.094-.812 1.781-.063.125-1.062.375-.375.157h-.063l.156.28-.562-.155-.219 2.437.844 2.438-1.594 1 1.875 2.28 2.781-.468 1 1.906.782-.468z"></path>
      ),
    },
    {
      name: 'Powiat Kaliski',
      id: '023015707000',
      type: 'county',
      level: '6',
      data: (
        <path d="M232.906 256.812l-2.218 3.5-2.594 1-2.469 1.688-.531 2.25-4.531.625-2.781 1-6.22-2-4.124-1.625-2.281-.5-.5.281 2.187 5.406-2.469 2.563.313 3.125-2.625 2.219 1.531 1.937 1.5 2.625 1.344 2.969 1.344 3.125 1 3.844 1.156 3.125 1 2.437 1.469 1.656.093-.25 2.406-.125 1.938-1.875 2.437.532 1.188 1.406.469 2.094 2.937 2.28.125 2.97-2.094 1-1.25 2.937-3.656-.25-1.844 1.063.25 2.406 2.063.031.5 1.375v1.563l-.375 1.375-2.094 1.53-1.25 2.595.469 3.125.812 2.78 2.063 1.75L220 329.47l2.063 1.593 1.375 1.563 1 2.437-.188.188 1.75-.156 3.094 1.78 2.969-1.187 3.468-.812 2.75.031 2.25 1.438 2.063.187 2.937.406.563.157.156-1.375.625-3.188.219-2.437.031-2.657-2.25-1.343.031-1.344 1.532-1.656.406-1.907.406-2.625-.687-3.78 1.343-2.438 2.313-1.875.375-1.5.812-2.25.032-2.25.78-2.282.22-2.062-.532-2.094.375-1.5 1.188-2.812.781-2.25 2.094-.907.719-2.5-.407-.53-1.187-1.595-1.875-1.906-2.938-1.625-.843-1.906-.844-2.094-2.219-.375-3.469-.219L241.22 275l-2-4.188-1-3.125-2.219-2.125-.812-3.28-.657-2.626-1.343-2.625-.282-.219z"></path>
      ),
    },
    {
      name: 'Powiat Pleszowski',
      id: '023015720000',
      type: 'county',
      level: '6',
      data: (
        <path d="M162.531 277.969l-.062 3.875 1.188 2.437-.22 2.781 3.094 1.938 2.25-.656 2.407 1.437.812 4.156 2.594.75 1.219-1.562 2.094-.125 2.968-1.688 2.594.532 1.156 3.156 2.938.375 4.344-.094 2.093-.5 3.594 1.438 5.375 1.468 2.094-1.187 2.406 1.062.656 3.125 2.031-.093 1.5-.656.813-1.782-1.531-1.75-1-2.437-1.156-3.125-1-3.844-1.344-3.125-1.344-2.969-1.5-2.625-1.531-1.937 2.625-2.22-.313-3.124 2.469-2.563-2.188-5.406.5-.281-.312-.063-.156-1.718 1.281-3.438 1.063-2.437-.47-3.97-3.093-.75-.25-1.5-1.469.095-3.656 1-2.094.656-2.406-.906-2.656-.22-.125.532-3.281.281-4 .657-2.438 1.5-1.406-.22-.031.063-.157-.093-.156-.032.313 2.188.843 1.562.844 1.22-1.25 2.937 1.531 2.781-1.593 2.25 1 2.437-.22 2.938.688 1.75-.218 1.562-1.563 1.688-1.937 1.875 1.343 3.156-3.125.656-1.531-2.125-1.906-.718-2.969.843-2.594-.218-3.093-.907-1.375-.093z"></path>
      ),
    },
    {
      name: 'Powiat Jarociński',
      id: '023015706000',
      type: 'county',
      level: '6',
      data: (
        <path d="M141.938 279.125h.281l2.594.219 3.812.75 2.781.218 2.094-.656 2.438-1.531 2.062.375 3.125-.656 2.781.218 3.094.907 2.594.218 2.969-.843 1.906.718 1.531 2.125 3.125-.656-1.344-3.156 1.938-1.875 1.563-1.688.218-1.562-.687-1.75.219-2.938-1-2.437 1.593-2.25-1.531-2.781 1.25-2.938-.844-1.219-.844-1.562-.312-2.188-.688-.093-1.53-2.782-.657-1.906.031-2.437-.469-2.782-.312-1.562-1.031-.531-3.844.281-4.844-.406-.781.062-.094.438-1.406 2.406-.563 3.469-2.468 2.218-1.25 1.875-.031 3.47-2.313 3.093-3.844 2.531-2.968 1-3.97-.75-1.124.531-.656.938-.375-.5-.125-.031-.72 2.844-3.468 1.156-1.719-.531-2.593-.407-3.125.125-2.094.688-1 .875.031.031 3.156 2.219 2.438.75 1.875 1.406 1.531 1.219.313 2.781 1.874 1.781 1.188 2.594.219.875z"></path>
      ),
    },
    {
      name: 'Powiat Wolsztyński',
      id: '023015929000',
      type: 'county',
      level: '6',
      data: (
        <path d="M28.219 268.844h.469l2.094.375 3.28.406 2.938.562 1.907-.5 2.78.032 1.595-2.75 2.28-2.22 2.126-3.093 3.125.75 2.781-2.219 1.719 1.75-1.407 1.375 2.407 1.47 3.531-5.72-.906-5.437-2.469.187-3.781-2.312-1.344-3.656-3.094-.22-2.812 1.345-2.407.312-1-2.781-1.718-2.094-3.469.469-.844-1.906 1.938-1.72-.688-1.405-2.406.312-3.094-2.812-.843-2.25.906-2.063-2.063-1.25-3.656 1.156-2.781.657.031-2.594 1.594-2.25-.813-2.594.031-3.312-.625-2.938-1.593-.031-1.563 1.719-2.281.656-.188 1.562-2.593.657-2.594-.22-1.094 2.063-2.937.125-1.75 1.532-2.782.156-.656-.156-.031 1.312-.375 3.188-.75 3.343-.406 2.282-.375 1.562.156 1.781 1.562 2.157 2.625 1.78 1.938.75 1.906.376 1.938.562 2.125 1.25 1.03 1.782-.75 1.593-1.593.5-.031 2.282.312 2.843 1.22 1.938 1.218 1.25 2.969.937 2.656.22 2.656.03 1.563.375 1.593 1.094 1.032 1.938.843 2.156-.312 1.594z"></path>
      ),
    },
    {
      name: 'Powiat Średzki',
      id: '023016125000',
      type: 'county',
      level: '6',
      data: (
        <path d="M121.719 233.75l.031.031.656 1.75-.375 1.375 2.25 1.594.657 2.094 1.53 1.593-.562 3.282-.218 2.75 2.093-.125 3.47-.47 2.937-.155 1.906.375 2.75 1.437 3.125-.312-.531 1.75-2.094.812-.594 4.156 1.531 1.25 2.813-1.187 1.187 1.062-2.656 2.907 2.594 1.062 2.094-1 3.968.75 2.97-1 3.843-2.531 2.312-3.094.032-3.469 1.25-1.875 2.468-2.218.563-3.47 1.406-2.405.094-.438-3.375.219-2.281 2.062-1.563 1.344-.875-.344-.5-2.437-1.156-2.625-1.344-2.781.719-2.938 3.656-.812.031-1.75-1.875-3.125-.5-1.407 2.282-1.343 2.812-2.907-1.187-2.625-2.938.813-2.25-.188-.844-1.562-1.343-2.969 1.437-3.094-1.187-2.468-2.594-.032-1.438-1.812-.125.406-2.937-.031-2.469 2.562-2.25.125-.375 2.094-4.156 1.313-2.156 4.312-2.594.469.125 2.25-3.125 1.187-4.344.97-.562 2.593 4.156-.625 1.031 2.094-2.437 1 .812 2.437-1.406 1.875-2.25.5-2.125.969z"></path>
      ),
    },
    {
      name: 'Powiat Kolski',
      id: '023015809000',
      type: 'county',
      level: '6',
      data: (
        <path d="M254.219 236.969l.031.093 2.063 1.594 3.437 2.469 2.938.906 3.281.406 1.875.532 2.094.906 1.75-1 2.062-.844.531.875-.218 3.125.125 2.75.656 2.781 1.031 1.25 1.531 1.407.813.312.656.719c-.138-.431-.252-.857-.469-1.313l3.032-1.75 1.312 1.532 3.969.812 2.25-.156 2.094-.719.593-1.969c.192-.108.37-.14.563-.156.573-.045 1.196-.122 1.75.031.688.192 1.229.774 1.906 1 .737.247 1.508.331 2.281.407.382.036.768.064 1.188.25l.062-1.72.22-2.062 1.343-2.062.781-1.313-.156-1.906-2.063-1.156-1.312-1.156.031-2.438.063-3.594 1.562-3.375 2.438-.343 3.625-2.032 2.468.032 2.813.406 2.062 1.375s.952.18 1.907-.563l.218-1.5-1.687-1.53 1.344-2.25 1.718-.345.032-1.718-.938-2.47-1.125-.187-2.25-.593-2.094.906-.937-1.156.969-1.688.593-1.875-.718-2.094.593-1.5.375-2.093-1.843-.563-1.875-1.531-1.875-1.156-1.094-1.344-.344-3.406-2.625-1.188-1.5-.937-.969 2.062-1.187 2.813-3.219.875-2.281 1.687-2.844-.25-1.687.188-1.157.718-1.125.938-2.468.156-2.438-.594-.906-3.218-.906-3.063-.157-2.437-2.218-1.72-.032.032-.937-.719-3.094-.406-1.406.156-1.219.5-1.562.844-.22 1.75.47 3.813.312 2.78 1.875 2.782-2.094 1.531-.593 3.47-2.782.812-.656-2.438-3.312.844-.875 1.875-2.625.844-.375 2.937 1.875 1.938 1.718 1.75-2.843 4.125-3.5 2.875-.75 4 .28 1.625z"></path>
      ),
    },
    {
      name: 'Powiat Koniński',
      id: '023015810000',
      type: 'county',
      level: '6',
      data: (
        <path d="M244.75 177.812l-1.344.157-.593 3.218-2.875 2.22-1.531 2.062-2.5 1.468-1.126 1.313-3.968.125-.938-2.281-3.375-.438-2.437-.594-2.344-.312-.344.719-7.906 6.843 1.875 2.438 1.531 2.281.656 2.594.844 2.281-.594 5.531L215.47 210l-2.625 1.531 1 3.656 1.875 2.282-1.406 1.53-1.969 4.47-1.625 3.625 1 4.343.438 3.813-.532 1.719-3.156 2.406 3.094 2.625.125 2.437-4.719 2.532-1.219 1.718-2.531.188.25 1.5 3.094.75.469 3.969-1.063 2.437-1.281 3.438.156 1.718 2.594.563 4.125 1.625 6.219 2 2.78-1 4.532-.625.531-2.25 2.469-1.688 2.594-1 2.312-3.625-1.187-2.093L231 252.5v-2.063l.563-2.093 4.719-2.688 1.78-2.406 3.782.906 2.313-3.406 2.75.375 3.343-3.594 4-.281-.312-1.906.75-4 3.5-2.875 2.844-4.125-1.72-1.75-1.874-1.938.375-2.937 2.625-.844.875-1.875 3.312-.844.656 2.438 2.782-.813.594-3.469 2.093-1.53-1.875-2.782-.312-2.781-.469-3.813.219-1.75 1.562-.844 1.219-.5 1.406-.156 3.094.406.938.72.03-.032-.03-.031-1.657-3.219-1.312-.219-1.25-3.593-2.625-1.188-2.094-.031-2.25-.781-.719-2.47-1.875-1.155-1.687-2.094-2.813-.625-1.906.937-1.156 2.813-3.219.344-2.281.53-2.031-2.874-.72-2.281.032-2.625-.344-1.907-1.875-.968z"></path>
      ),
    },
    {
      name: 'Miasto Konin',
      id: '023015862000',
      type: 'city',
      level: '6',
      data: (
        <path d="M233.125 212.687l2.406.907 1.907.375 2.062.53.656 1.563.657 3.125-.719 2.782-1.75 1.343-1.063 1.907 2.22.562 1.718 1.219-.719 1.562-2.25-.03.125 3.812-.906 2.75-2.094.656-4.656.125-.156-1.563.719-2.937-2.407-1.438-.312-2.062.375-2.781 3.312-.125.906-2.063-.656-2.969-1.906-.187-1.188-1.219s-.089-.288-.062-.656c.027-.368.154-.823.594-1.25l1.906-.313.563-1.906.718-1.719z"></path>
      ),
    },
    {
      name: 'Powiat Słupecki',
      id: '023015823000',
      type: 'county',
      level: '6',
      data: (
        <path d="M190.938 249.5l2.656.219 2.406.906 2.094-.656 3.656-1 4-.282 1.219-1.718 4.719-2.532-.125-2.437-3.094-2.625 3.156-2.406.531-1.72-.437-3.812-1-4.343 1.625-3.625 1.969-4.47 1.406-1.53-1.875-2.282-1-3.656 2.625-1.531 2.313-2.563.593-5.53-.844-2.282-.656-2.594-1.531-2.281-1.875-2.438 7.906-6.843.344-.72-.688-.093-1.875-1.937.25-2.25.032-2.469-1.125-1.875-2.438-.438-1.344-.28-.062-.032-.469-.094-.031-.093-.063-.032-3.5 2.032-1.75 2.03-.906 1.72-1.406.875-1.406 1.343-1.25 2.063-.188 1.906-1.625 4.844-1.594 3.25-2.656 2.062-1.281 5.5-4.688 1-1.906.47-4.156-.907-4.406.375-.688 3.531 1.875 3.156 1.688 2.438-.344 1.375-4.375 1.344 3.219 5.593 3.781 1.438 2.063 2.094-.188 2.093-1.781 1.875 1.187 2.97 2.375 1.937 2.938.718-.719 3.625-2.25-.187-2.688 6.031.813 2.063 2.906 3.343-.062.344z"></path>
      ),
    },
    {
      name: 'Powiat Poznański',
      id: '023016121000',
      type: 'county',
      level: '6',
      data: (
        <path d="M118.594 155.406l-2.5.313-2.813 2.062-1.906 1.156-3.125-.03-.906 2.593-1.563.156-.906 2.406 1.906.875 1.72 1.438.655 1.375-3.125.844-1.406 1.187-2.437.813-2.25-.375-2.594.843-2.125 1.532.156 2.937-1.406.313-1.188-2.094-.468-2.594-2.782.125.5 1.75-1.093 3.438-.031 2.437-2.782-.219-.468-1.906-1.75-.187-2.063-.031-1.25.843 1.031 2.094-3.031 5.156-2.125 3.094.313 2.938-4.5.093-.563 2.25 3.813.75.312 2.094-2.094.312-.406 3.625-2.25.844-1-2.625-1.906-.531-1.594 2.219-1.406 1.031-2.344.094-.125.656-.812-.625-.375 2.594 1.343 1.75 2.938 1.437-.406 3.094L64 211.125l-.875 1.906 3.438.563-.719 2.75.313.625.187.093 2.094-.5 2.25-.656 2.094-.656.5.875.343 1.562-.218 2.75-1.407 1.72-1.562 1.03-.219 1.532 1.906.562 1.375 1.938.625 3.968.219 2.75.094.032 2.281-2.375 2.813-2.063L81.093 228l3.781 1.781 3.313-1.5 3.468.906.47 3.657 2.405.218 5.407-.968 1.875.375 1.25-1.375 2.593.562 2.032 2.781 4.187-1.843 2.219 2.28 2.219 2.813 1.593-2.218 2.97-1.344 2.968-1.344 2.25-.5 1.406-1.875-.812-2.437 2.437-1-1.031-2.094-4.156.625.562-2.594 4.344-.969 3.125-1.187-.125-2.25 2.594-.469 2.156-4.312 4.156-1.313.375-2.094 2.25-.125 2.469-2.562 2.938.031.562-2.062-.125-2.438-1.719-2.781.406-2.094 3.813-1.656.125-.031.969-3.094-1.188-1.219-.844-2.094-1.187-.875-1.375-1.937 1.063-1.875-3.094-1.438.906-3.125.031-2.75-2.406-1.25-2.938.125-2.75-1.937-3.312 1.5-3.094-1.094-.656-2.781-2.594-.5-1.562.281-.813-4 .719-2.594-.469-2.25-2.594-.562-1.718-1.25-2.782.656-.656-2.062 1.75-.844.375-2.25-2.937-1.781-.094-.188z"></path>
      ),
    },
    {
      name: 'Miasto Poznań',
      id: '023016264000',
      type: 'city',
      level: '6',
      data: (
        <path d="M110.531 181.812l.125 2.438.125 2.781-.187 2.75-.219 1.906 1.906.72 3.125-1.345 2.063.907-.188 1.906 2.938 1.594-1.781 2.406 1 2.781.812 4.875-1.625 2.906-4 1.157-.875 1.562.313 2.938-.375 1.718-1.063.875-2.219-2.125-1.375-1.75-2.218-1.937-1.188-1.594-1.187-2.437-2.75-.907-3.657.813-.468-3.281-2.407-1.938.313-8.312-.813-3.844-.312-2.063-1.719-1.25-2.094.157-1.062 1.875-1.719-.532 1.063-3.125 3.5-1.312 2.937.906 2.031 2.438 3.125.906 3.438.25.063-2.625 1.562-1.688 1.938-.843 3.124-.657z"></path>
      ),
    },
    {
      name: 'Powiat Gnieźnieński',
      id: '023015803000',
      type: 'county',
      level: '6',
      data: (
        <path d="M129.375 172.25l2.594.5.656 2.781 3.094 1.094 3.313-1.5 2.75 1.937 2.937-.125 2.406 1.25-.031 2.75-.906 3.125 3.094 1.438-1.063 1.875 1.375 1.937 1.188.875.843 2.094 1.188 1.219-1.094 3.469 3.094 1.406 1.875 1.781 1.531 2.094 1.563.187-.125-2.406.375-2.094 4.156.594 2.062.719 4.5.594 2.407 1.75 4.812.937 2.594 1.25 5.031-.437 4.156.906 1.907-.469 4.687-1 1.281-5.5 2.657-2.062 1.593-3.25 1.625-4.844.188-1.906 1.25-2.063 1.406-1.344 1.406-.875.907-1.718 1.75-2.032 3.5-2.03.062.03-.687-2.187-1.875-.969-2.47-.031-2.28.906-3.594-.031-.531-1.156.593-3.188.063-2.844-2.25-1.718-1.313-1.532-4.125-1.562-3.562-1.75-1.344 1.469h-1.5l-1.312-1.719-2.282.531.344 3.219-.969 1.5-1.937 2.219-2.438-.407.031-2.28.782-1.876-1.094-3.406-2.25.719-.719-3.407.813-3.375-1.469-2.687-2.281-.031-2.469.906-1.344 1.688-2.844 1.093-1.53 1.688-2.095-.219-2.437-.969-.156-2.843.969-.563.406-2.625-1.438-1.375-2.125.969.469-1.031-1.594 2.562-1.25 2.406L156.5 153l-1.562 1.031-1.594 1.532-1.75 1.03-3.438-.405-1.468 4.656-3.125.469-2.781 1.53-1.25 2.063-2.094 1.875-.75 2.75-2.938.844-3.656-.062-.531 1.906-.188.031z"></path>
      ),
    },
    {
      name: 'Powiat Wągrowiecki',
      id: '023016028000',
      type: 'county',
      level: '6',
      data: (
        <path d="M118.594 155.406l.094.188 2.937 1.78-.375 2.25-1.75.845.656 2.062 2.782-.656 1.718 1.25 2.594.562.469 2.25-.719 2.594.813 4 1.75-.312.531-1.907 3.656.063 2.938-.844.75-2.75 2.093-1.875 1.25-2.062 2.782-1.532 3.125-.468 1.468-4.657 3.438.407 1.75-1.032 1.594-1.53L156.5 153l.375-1.719 1.25-2.406 1.594-2.563-.469 1.032 2.125-.97-.594-.562-1.5-.593-1.5-1.907-1.875-.593-.125-5.094 1.907.031 1.312-1.125 2.844.438 1.875.218.969-1.312.03-1.719.782-2.437-.344-2.657.625-3.187-.062-9.813-2.75-4.03-4.688-3.063-2.625-1.375-2.062-.594-6.25.281-1.281-2.844.406-2.843 2.5-2.594-.688-4.344 1-3.406.125-.25-.843.031-2.594.156-1.156.313.406.312-.656-.125.312 3.094.125 2.625-1.937 1.688-2.282 2.062-3.093-.062-2.625.312.125 4.344.125 3.281-1.594 2.938.125 2.78-2.813 1.845 1 2.625-5.187.78-3.344 2.032-1.594 3.281-.75 3.094 1.375 2.469-1.25 1.187-3.093-.906-.844.031.437 3.938-.375 2.437 2.22 2.282 3.968.406 2.094-1.719 1.406.031.469 3.625.312 2.781.656 2.438-2.093.844 1.156 4 1 2.437-.906 1.375-1.375-.531-1-1.594-2.782.313-2.25-.031-1.593 1.187h-.094z"></path>
      ),
    },
    {
      name: 'Powiat Czarnkowsko-Trzcianecki',
      id: '023016002000',
      type: 'county',
      level: '6',
      data: (
        <path d="M16.938 139.656l.625.094 3.75 2.656 2.625-.125 1.719 1.219 1.406-2.219 1.406-1.875 1.594-1.031 2.094-1.688 2.625-2.562L38.25 134l3.657.031 2.75 1.438 3.25 2.312 3.812-.312 1 3.656 2.594-.313.562-3.28 2.25.03 2.594.75 2.938 1.75-1.594 2.407 1.531 1.25 2.625-1.875 3.813.406 3.093 1.437 2.938-.312 3.656-.813 3.656-.656 2.25.563 2.063 1.406-.563 1.562.313 2.25 3.312-.468.906-2.25.907-3.094.875-1.563 1.937-2.031.906-1.562-1.718-2.782-2.032-2.125-1.718-1.75-.313-2.437-1.875-.875.031-2.094L91.25 124l2.594.031 2.406-1.469L94.625 118l.25-4.5-1.687-3.844-1.688-3.813-.344.657-1.78 2.218-2.25 1.032-2.938-.407-1.688-4.187 1.438-3.094-.813-2.781-2.406-2.625 1.062-1.219 1.907-.125 1.406-.687.187-2.407.22-2.593 2.468-1.875 2.281-2.407-1.719-2.28-1.875-.376-1.75.344-.406 3.094-3.281.125-2.906-2.125-2.282.5-1.343-1.563-3.125-.406-2.094 1.531-4.5-1.281-3.438-1.438-3.625-1.78-.03-.063-.22.125L56.281 82v1.687l-.062 2.281L56 88.031l-1.312.937-1.344.907-.969 2.25-3.406.156-2.656.531-3.407.313-3.03.531-2.47 1.656-2.468.719L31.53 96l-4.125-1-2.062-1.156-2.438-1-2.812-.97-.75 2.282-1.25 2.469-1.375 1.687a7.75 7.75 0 00-.094 1.469c.02.766.01 1.547-.03 2.313a40.974 40.974 0 01-.25 2.656c-.114.96-.433 1.909-.407 2.875.016.606.293 1.192.531 1.75.259.604.844 1.068.938 1.719.092.644-.264 1.27-.407 1.906-.13.574-.368 1.162-.406 1.75-.045.704.075 1.393.156 2.094.09.772.203 1.548.344 2.312.155.838.36 1.672.563 2.5.22.904.47 1.778.468 2.219l-.968 1.844-3.375 1.187-.407 2.625.688.906.875 1.25 1.031 1.594.156 2.125 1.188 3.031-.375 1.219z"></path>
      ),
    },
    {
      name: 'Powiat Pilski',
      id: '023016019000',
      type: 'county',
      level: '6',
      data: (
        <path d="M57.875 79.625l.031.062 3.625 1.782 3.438 1.437 4.5 1.281 2.094-1.53 3.125.405 1.343 1.563 2.282-.5 2.906 2.125 3.281-.125.406-3.094 1.75-.344 1.875.375 1.72 2.282-2.282 2.406-2.469 1.875-.219 2.594-.187 2.406-1.406.687-1.907.125-1.062 1.22 2.406 2.624.813 2.781-1.438 3.094 1.688 4.188 2.937.406 2.25-1.031 1.781-2.22 1.407-2.562 1.968-2.593 1.938-2.907 1.25-2.25.687-1.03 3.313.25 4.5.405 3.125-.5 3.125-.812 2.625-1 3.625-.469 3.844-.812 3.812-.125 4.344-.625 3.625-.625 2.437.03 2.75.907 3.282.219 3.156-.813 2.594-.156.843-.031 1.22-2.75.437-3.938.781-1.906 1.531-.531-.531-1.906-2.594-3.063-.156-3.375-.156-2.094-1.875-.78.969-2.25 3.406-.72 3.031-.125 2.281-1.312.781-1.875 1-2.813-3.906-5.53-3.125-4.782-4.875-3.844-1.906-.687-.781.187-.281-.594-.157-.03-.531 2.937-.75 3.625-1.594 2.406-2.437 1.5-1.938.844-.906 2.593-.531 1.032-1.719.312-2.281.313-3.281.312-2.094 1.188-1.938 2.218-.719 1.907-1.406 1-2.781-.375-2.25.156-4.688 1.656-3.5 2.188-.562 3.468-4.375.97-1.531-1.563-3.094-1.782-3.125.125-1.688-1.593.532-1.907.03-2.062 1.938-.844L97.47 65l-.5-2.25-1.688-2.094.375-1.906-.687-1.219-1.906.469-1.375-1.563-2.907-1.093-.375-.094-1.906 1.313-1.156 1.28-.969 2.282-.031 1.688-1.156 1.5.531 1.875-.594 1.53-1.125.345-1.094-1.532-1.687-.968h-1.531l-2.844 1.656L73.5 68.25l-1.187 2.469L70 73.313l-2.656 1.093-3.031 1.282-2.063-.594-1.344.562-.75 1.094-.812 2.094-1.469.781z"></path>
      ),
    },
    {
      name: 'Powiat Złotowski',
      id: '023016031000',
      type: 'county',
      level: '6',
      data: (
        <path d="M88.406 55.25l.375.094 2.907 1.093L93.063 58l1.906-.469.688 1.219-.376 1.906 1.688 2.094.5 2.25-.188 1.906-1.937.844-.031 2.062-.531 1.907 1.687 1.593 3.125-.125 3.094 1.782 1.531 1.562 4.375-.969.563-3.468 3.5-2.188 4.687-1.656 2.25-.156 2.781.375 1.407-1 .718-1.907 1.938-2.218 2.094-1.188 3.28-.312 2.282-.313 1.719-.312.531-1.032.906-2.593 1.938-.844 2.437-1.5 1.594-2.406.75-3.625.531-2.938-.062-.031-.156-2.844.812-2.812.219-2.844 2.281-1.656 1.375-2.063 2.656-1.656 1.907-1.875 1.187-2.625 1.156-3-.093-.375-1.594.344-2.813-.594-1.312-1.719-1.844-1.75-1.875-1.719-2.437-.406-4.157-.062-3.968-.063-2.657-.781-3.75-.625-1.53.719-1.157 1.312-1.719 1.125-3.187-.437-1.688-.407-1.125-1.125.063-2.156c-.103-.056-.24-.045-.375-.031-.576.057-1.144.097-1.72.156-.511.053-1.085-.008-1.562.188-.46.19-.748.65-1.156.937-.304.215-.632.371-.906.281-.156-1.182-.784-1.937-1.094-2.812-.315-.89-.367-1.887-.75-2.75-.38-.855-1.044-1.527-1.5-2.344-.494-.886-.889-1.843-1.344-2.75-.364-.726-.848-1.393-1.125-2.156-.413-1.139-.599-2.36-.906-3.531-.115-.44-.237-.87-.344-1.313L106.22 0l-.407.344-1.906.375-3.032.875L99 2.156l-1.343.907L96.5 4l-.78 2.813-.063 2.656-1.532 2.062-.593 2.25-.22 2.063-.218 1.906-.969 1.094-1.875.75-1.53 1.281-1.157 1.5-1.719 1.688-2.094.343-3.03-.03-3.22.124-2.062.344-1.719.937-2.281-.03-1.688-.782-1.687-1.156-1.125.156-.594 1.5.188 1.719 1.125.75.718 1.343-.03 1.688-.563 1.344.906 1.875 1.437 4.187L72 39.531l1.5 1.72 1.47 1.53 1.53.407 1.47 1.156 1.5.781 1.343.594 2.812.031 1.47 3.781 3.937 2.157.718 2.093-1.343 1.47z"></path>
      ),
    },
  ]
  return wielkopolskie
}
