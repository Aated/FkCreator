export default {
  kind: 'category',
  name: '数值运算相关',
  categorystyle: 'math_category',
  contents: [
    {
      type: 'math_number',
      kind: 'block',
      fields: {
        NUM: 123
      }
    },
    {
      type: 'math_arithmetic',
      kind: 'block',
      fields: {
        OP: 'ADD'
      },
      inputs: {
        A: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        B: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        }
      }
    },
    {
      type: 'math_single',
      kind: 'block',
      fields: {
        OP: 'ROOT'
      },
      inputs: {
        NUM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 9
            }
          }
        }
      }
    },
    {
      type: 'math_trig',
      kind: 'block',
      fields: {
        OP: 'SIN'
      },
      inputs: {
        NUM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 45
            }
          }
        }
      }
    },
    {
      type: 'math_constant',
      kind: 'block',
      fields: {
        CONSTANT: 'PI'
      }
    },
    {
      type: 'math_number_property',
      kind: 'block',
      fields: {
        PROPERTY: 'EVEN'
      },
      inputs: {
        NUMBER_TO_CHECK: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 0
            }
          }
        }
      }
    },
    {
      type: 'math_round',
      kind: 'block',
      fields: {
        OP: 'ROUND'
      },
      inputs: {
        NUM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 3.1
            }
          }
        }
      }
    },
    {
      type: 'math_on_list',
      kind: 'block',
      fields: {
        OP: 'SUM'
      }
    },
    {
      type: 'math_modulo',
      kind: 'block',
      inputs: {
        DIVIDEND: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 64
            }
          }
        },
        DIVISOR: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 10
            }
          }
        }
      }
    },
    {
      type: 'math_constrain',
      kind: 'block',
      inputs: {
        VALUE: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 50
            }
          }
        },
        LOW: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        HIGH: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 100
            }
          }
        }
      }
    },
    {
      type: 'math_random_int',
      kind: 'block',
      inputs: {
        FROM: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        TO: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 100
            }
          }
        }
      }
    },
    {
      type: 'math_random_float',
      kind: 'block'
    },
    {
      type: 'math_atan2',
      kind: 'block',
      inputs: {
        X: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        },
        Y: {
          shadow: {
            type: 'math_number',
            fields: {
              NUM: 1
            }
          }
        }
      }
    }
  ]
};
