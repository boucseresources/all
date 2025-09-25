!!! info "**Solve.** $(2x+3y+4)\,dx+(3x-6y-5)\,dy=0$"


    **Soln.**
    Here,
    $M=2x+3y+4,\quad \dfrac{\partial M}{\partial y}=3$
    and,
    $N=3x-6y-5,\quad \dfrac{\partial N}{\partial x}=3$.
    Since $\dfrac{\partial M}{\partial y}=\dfrac{\partial N}{\partial x}$, the given differential eq. is exact.

    **The solution is**
    $\displaystyle \int_{\,y=\text{const.}} M\,dx\;+\;\int(\text{Terms in }N\text{ independent of }x)\,dy=\text{const.}$

    $\Rightarrow\ \displaystyle \int_{\,y=\text{const.}}(2x+3y+4)\,dx\;+\;\int(-6y-5)\,dy=c'$

    $\Rightarrow\ x^{2}+3xy+4x-3y^{2}-5y=c'$

    $\Rightarrow\ \boxed{\,x^{2}+3xy+4x-3y^{2}-5y=C\,}$

!!! info "**Solve.** $(1+e^{x/y})\,dx+e^{x/y}\!\left(1-\dfrac{x}{y}\right)\,dy=0$"


    **Soln.**
    Here,
    $M=1+e^{x/y},\quad \dfrac{\partial M}{\partial y}=e^{x/y}\!\left(-\dfrac{x}{y^{2}}\right)$
    and,
    $N=e^{x/y}\!\left(1-\dfrac{x}{y}\right),\quad \dfrac{\partial N}{\partial x}=e^{x/y}\!\left(-\dfrac{x}{y^{2}}\right)$.
    Since $\dfrac{\partial M}{\partial y}=\dfrac{\partial N}{\partial x}$, the given differential eq. is exact.

    **The solution is**
    $\displaystyle \int_{\,y=\text{const.}} M\,dx\;+\;\int(\text{Terms in }N\text{ independent of }x)\,dy=\text{const.}$

    $\Rightarrow\ \displaystyle \int_{\,y=\text{const.}}\!\!(1+e^{x/y})\,dx\;+\;\int 0\,dy=c'$

    $\Rightarrow\ x+y\,e^{x/y}=c'$

    $\Rightarrow\ \boxed{\,x+y\,e^{x/y}=C\,}$



!!! info "**Prove.** The differential equation $M\,dx+N\,dy=0$ is exact **iff** $\dfrac{\partial M}{\partial y}=\dfrac{\partial N}{\partial x}$, where $M,N$ are functions of $x,y$."



    **Soln.**
    Assume $M,N\in C^{1}$ on a simply connected region $R\subset\mathbb{R}^{2}$.

    (Necessity) Suppose the equation is exact. Then $\exists\,\Phi(x,y)$ such that
    $d\Phi=\Phi_x\,dx+\Phi_y\,dy=M\,dx+N\,dy$. Hence

    $$
    M=\Phi_x,\qquad N=\Phi_y.
    $$

    By equality of mixed partials (Clairaut’s theorem),

    $$
    \frac{\partial M}{\partial y}=\Phi_{xy}=\Phi_{yx}=\frac{\partial N}{\partial x}.
    $$

    (Sufficiency) Conversely, assume $\dfrac{\partial M}{\partial y}=\dfrac{\partial N}{\partial x}$ on $R$.
    Fix $(x_0,y_0)\in R$ and define

    $$
    \Phi(x,y)=\int_{x_0}^{x}\! M(\xi,y_0)\,d\xi\;+\;\int_{y_0}^{y}\! N(x,\eta)\,d\eta.
    $$

    Then

    $$
    \Phi_x=M(x,y_0)+\int_{y_0}^{y}\! N_x(x,\eta)\,d\eta
        =M(x,y_0)+\int_{y_0}^{y}\! M_y(x,\eta)\,d\eta
        =M(x,y),
    $$

    and

    $$
    \Phi_y=\int_{y_0}^{y}\! N_y(x,\eta)\,d\eta+N(x,y)
        =N(x,y).
    $$

    Therefore $d\Phi=\Phi_x\,dx+\Phi_y\,dy=M\,dx+N\,dy$, so the equation is exact.

    $\boxed{\text{Hence }M\,dx+N\,dy=0\text{ is exact } \Longleftrightarrow \; M_y=N_x.}$
